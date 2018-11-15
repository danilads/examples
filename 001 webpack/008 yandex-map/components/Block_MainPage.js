import React,{Fragment} from 'react';
import { YMaps, Map, GeoObject, Clusterer, Placemark  } from 'react-yandex-maps';

class Block_MainPage extends React.PureComponent {
	
	state = {
		baseFocus:{ center: [55.76, 37.64], zoom: 10 },
		arr:[
				{uniIdn:437,coord:[55.76, 37.64],name:'some location1',selected:false},
				{uniIdn:438,coord:[55.77, 37.65],name:'some location2',selected:false},
			]
	};
	selectFunc=(e)=>{
		let output=[]
		for(let i=0;i<this.state.arr.length;i++){
			let item = this.state.arr[i];
			item.selected = false;
			if(e===this.state.arr[i].uniIdn){
				item.selected = true;
			}
			output.push(item);
		}

		this.setState({arr:output});
	}
  	render() {
		return (
			<div style={{width:"600px"}}>
				<YMaps>
                        <div id="map-basics">
                            <Map state={this.state.baseFocus} width={-1} height={448}>
                            <Clusterer
                                options={{
                                    cursor: 'pointer',
                                    preset: 'islands#invertedOrangeClusterIcons',
                                    groupByCoordinates: false,
                                    clusterDisableClickZoom: true,
                                    clusterHideIconOnBalloonOpen: false,
                                    geoObjectHideIconOnBalloonOpen: false,
                                }}>
                                {this.state.arr.map((it, ind) => {
                                    if(typeof it.coord[0] === 'number'){
                                        if(it.selected===false){
                                            return <Placemark
                                                key={it.uniIdn}
                                                geometry={{coordinates: it.coord}}
                                                properties={{hintContent: it.name}}
                                                onClick={()=>this.selectFunc(it.uniIdn)}
                                                options={{cursor: 'pointer',preset:'islands#Icon',iconColor: "orange"}}/>
                                        }
                                    }})}
                            </Clusterer>
                            {this.state.arr.map((it, ind) => {
                                if(typeof it.coord[0] === 'number'){
                                    if(it.selected===true){
                                        return <GeoObject
                                            key={it.uniIdn}
                                            geometry={{type: 'Point',coordinates: it.coord,}}
                                            properties={{hintContent: it.name}}
                                            options={{
                                                cursor: 'pointer',
                                                preset: 'islands#dotIcon',
                                                iconColor: 'gray'
                                            }}
                                        />
                                    }
                                }
                            })}
                                
                            </Map>
                        </div>
                    </YMaps>
				</div>
		);

  	}

}



export default Block_MainPage;
