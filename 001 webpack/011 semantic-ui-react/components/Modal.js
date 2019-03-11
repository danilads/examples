import React,{Fragment} from 'react';

import {Button, Modal} from 'semantic-ui-react';


class Mod extends React.PureComponent {
	


  	render() {
		return (
            <Modal
                open={true}
            >
            <Modal.Header>
              <div>
                <div>
                  Контрагенты
                </div>
                <div>
                  Мои счета
                </div>
                <div>
                  Бюджет
                </div>
              </div>
            </Modal.Header>
            <Modal.Content>
              <button>
                Добавить контрагента
              </button>
              <br/>
              <button>
                Добавить контрагента
              </button>
              <br/>
              <button>
                Добавить контрагента
              </button>
              <br/>
              <button>
                Добавить контрагента
              </button>
              <br/>
            </Modal.Content>
          </Modal>
		);

  	}

}



export default Mod;
