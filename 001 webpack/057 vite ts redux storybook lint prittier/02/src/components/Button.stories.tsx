import { Button } from "./Button";
import { SVG_React_Logo } from "svg/SVG_React_Logo";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <hr />
    <h2>Loading Buttons click on it</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        isLoadingAnimation
        onClick={(_e, setSpinner) => {
          setSpinner?.(true);
        }}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        isLoadingAnimation
        onClick={(_e, setSpinner) => {
          setSpinner?.(true);
        }}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        isLoadingAnimation
        onClick={(_e, setSpinner) => {
          setSpinner?.(true);
        }}
        type="Primary"
        size="Large"
        title="Button"
      />
      <Button
        isLoadingAnimation
        onClick={(_e, setSpinner) => {
          setSpinner?.(true);
        }}
        type="Primary"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <hr />
    <h2>Primary Large</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        onClick={console.log}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Primary"
        size="Large"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Primary"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <h2>Gradient Large</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Gradient"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        onClick={console.log}
        type="Gradient"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Gradient"
        size="Large"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Gradient"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <h2>Secondary Large</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Secondary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        onClick={console.log}
        type="Secondary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Secondary"
        size="Large"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Secondary"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <h2>Outline Large</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Outline"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        onClick={console.log}
        type="Outline"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Outline"
        size="Large"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Outline"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <h2>Text Large</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Text"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        onClick={console.log}
        type="Text"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button onClick={console.log} type="Text" size="Large" title="Button" />
      <Button
        onClick={console.log}
        type="Text"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <hr />
    <h2>Primary Small</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        onClick={console.log}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Primary"
        size="Small"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Primary"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <h2>Gradient Small</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Gradient"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        onClick={console.log}
        type="Gradient"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Gradient"
        size="Small"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Gradient"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <h2>Secondary Small</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Secondary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        onClick={console.log}
        type="Secondary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Secondary"
        size="Small"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Secondary"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <h2>Outline Small</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Outline"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        onClick={console.log}
        type="Outline"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Outline"
        size="Small"
        title="Button"
      />
      <Button
        onClick={console.log}
        type="Outline"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <h2>Text Small</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        onClick={console.log}
        type="Text"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        onClick={console.log}
        type="Text"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button onClick={console.log} type="Text" size="Small" title="Button" />
      <Button
        onClick={console.log}
        type="Text"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <hr />
    <h2>Primary Large Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        disabled
        onClick={console.log}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Primary"
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Primary"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <h2>Gradient Large Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Gradient"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        disabled
        onClick={console.log}
        type="Gradient"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Gradient"
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Gradient"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <h2>Secondary Large Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Secondary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        disabled
        onClick={console.log}
        type="Secondary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Secondary"
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Secondary"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <h2>Outline Large Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Outline"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        disabled
        onClick={console.log}
        type="Outline"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Outline"
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Outline"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <h2>Text Large Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Text"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
      />
      <Button
        disabled
        onClick={console.log}
        type="Text"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Text"
        size="Large"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Text"
        size="Large"
        isArrow
        title="Button"
      />
    </div>
    <hr />
    <h2>Primary Small Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        disabled
        onClick={console.log}
        type="Primary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Primary"
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Primary"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <h2>Gradient Small Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Gradient"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        disabled
        onClick={console.log}
        type="Gradient"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Gradient"
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Gradient"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <h2>Secondary Small Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Secondary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        disabled
        onClick={console.log}
        type="Secondary"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Secondary"
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Secondary"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <h2>Outline Small Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Outline"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        disabled
        onClick={console.log}
        type="Outline"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Outline"
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Outline"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <h2>Text Small Disabled</h2>
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Button
        disabled
        onClick={console.log}
        type="Text"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
      />
      <Button
        disabled
        onClick={console.log}
        type="Text"
        icon={<SVG_React_Logo height="20px" width="20px" />}
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Text"
        size="Small"
        title="Button"
      />
      <Button
        disabled
        onClick={console.log}
        type="Text"
        size="Small"
        isArrow
        title="Button"
      />
    </div>
    <hr />
  </div>
);
