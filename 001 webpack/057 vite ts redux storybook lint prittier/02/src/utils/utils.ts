type RequestWrapPropsQueryParam = {
  key: string;
  value: string | number | boolean;
};

type RequestWrapProps = (
  url: string,
  body: RequestInit,
  queryParams?: RequestWrapPropsQueryParam[] | null,
  responseHandler?: (data: any, response: Response, status: number) => void,
) => Promise<void>;

export const requestWrap: RequestWrapProps = async (
  url,
  body,
  queryParams = [],
  responseHandler,
) => {
  const baseUrl = "http://localhost:8030";
  
  const searchParams = new URLSearchParams();
  for (const { key, value } of queryParams || []) {
    searchParams.append(key, String(value));
  }

  const queryString = searchParams.toString();
  const correctUrl = `${baseUrl}${url}${queryString ? `?${queryString}` : ""}`;

  try {
    const response = await fetch(correctUrl, body);

    const status = response.status;

    const json = await response.json();

    if (!response.ok) {
      throw new Error(`Response not OK: ${status}`);
    }

    responseHandler?.(json, response, status);
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    responseHandler?.({ error: error.message }, {} as Response, 0);
  }
};
