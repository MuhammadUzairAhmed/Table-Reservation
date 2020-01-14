import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Modal,
    ScrollView,
    Image
} from 'react-native';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numColumns: 3,
            data: [
                { id: 1, key: 'Deck 1', color:'#557E77' }, { id: 2, key: 'Deck 2', color:'#557E77' }, { id: 3, key: 'Deck 3', color:'#D22424' }, { id: 4, key: 'Deck 4', color:'#D22424' }, { id: 5, key: 'Deck 5', color:'#D22424' }, { id: 6, key: 'Deck 6', color:'#D22424' }, { id: 7, key: 'Deck 7', color:'#D22424' }, { id: 8, key: 'Deck 8', color:'#D22424' }
            ],
            tables:

                [
                    {
                        id: 1,
                        values: [
                            { id: 1, color:'#77EE57', type:'red apple',time:'1-13-20 4:11 pm',name: 'zahid', status: 'confirmed', persons: 14, tableNo: 32, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                            { id: 2, color:'#E1E71C',type:'red apple',time:'12-12-20 8:00 pm',name: 'shaka',status: 'pending', persons: 8, tableNo: 22, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                            { id: 3, color:'#DA6A2A',type:'apple',time:'1-13-20 4:11 pm',name: 'zahid',status: 'cancelled', persons: 4, tableNo: 12, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                            { id: 4, color:'#77EE57',type:'red apple',time:'1-13-20 4:11 pm',name: 'shaka',status: 'confirmed', persons: 9, tableNo: 37, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                            { id: 5, color:'#77EE57',type:'red apple',time:'12-12-20 8:00 pm',name: 'zahid',status: 'confirmed', persons: 11, tableNo: 72, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                            { id: 6, color:'#E1E71C',type:'apple',time:'1-13-20 4:11 pm',name: 'shaka',status: 'pending', persons: 10, tableNo: 78, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                            { id: 7, color:'#DA6A2A',type:'red apple',time:'12-12-20 8:00 pm',name: 'zahid',status: 'cancelled', persons: 18, tableNo: 31, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                            { id: 8, color:'#77EE57',type:'apple',time:'12-12-20 8:00 pm',name: 'shaka',status: 'confirmed', persons: 24, tableNo: 61, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." }
                        ]
                    },
                    {
                        id: 2,
                        values: [
                            { id: 1,color:'#77EE57', type:'red apple',time:'1-13-20 4:11 pm',name: 'shaka',status: 'confirmed', persons: 14, tableNo: 32, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                            { id: 2,color:'#E1E71C', type:'apple',time:'12-12-20 8:00 pm',name: 'shaka',status: 'pending', persons: 8, tableNo: 22, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                            { id: 3,color:'#DA6A2A', type:'red apple',time:'1-13-20 4:11 pm',name: 'zahid',status: 'cancelled', persons: 4, tableNo: 12, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." }
                        ]
                    }
                ]
        };
    }

    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <TouchableOpacity onPress={() => this.displayTableData(item)} style={[styles.item, {backgroundColor:item.color, height: Dimensions.get('window').width / this.state.numColumns, margin: 5, borderRadius: 10 }]}>
                <Text style={styles.itemText}>{item.key}</Text>
            </TouchableOpacity>
        );
    }

    formatRow = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }
        return data;
    }

    displayTableData = (item) => {
        const { tables } = this.state
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].id == item.id) {
                this.props.getTables(tables[i].values)
                break;
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <FlatList
                    data={this.formatRow(this.state.data, this.state.numColumns)}
                    style={styles.container}
                    renderItem={this.renderItem}
                    numColumns={this.state.numColumns} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
       
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
}); 