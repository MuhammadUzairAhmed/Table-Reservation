import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Alert,
    ScrollView,
    Modal,
} from 'react-native';

export default class Tables extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            refresh: false,
            search: '',
            data: [
                { id: 1, persons: "Comunity", image: "https://img.icons8.com/clouds/100/000000/groups.png", count: 124.711, status: 'sc', tableNo: 3 },
            ],
            index: 0
        };
    }

    clickEventListener = (item) => {
        for (let i = 0; i < this.state.data.length; i++) {
            if (item.id == this.state.data[i].id) {
                this.setState({ index: i }, () => this.setState({ modalVisible: true }))
                break
            }
        }
    }

    componentDidMount() {
        this.setState({ data: this.props.data, refresh: !this.state.refresh }, () => {
            console.log(this.state.data, 'cewhk')
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps != this.props) {
            this.setState({ data: this.props.data, refresh: !this.state.refresh })
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { index } = this.state

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.followButton} onPress={() => this.props.displayTables(false)}>
                    <Text style={styles.followButtonText}>back</Text>
                </TouchableOpacity>
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={() => this.setModalVisible(false)}
                    visible={this.state.modalVisible}>

                    <View style={styles.popupOverlay}>
                        <View style={styles.popup}>
                            <View style={styles.popupContent}>
                                <ScrollView contentContainerStyle={styles.modalInfo}>
                                    <Text style={styles.name}>Name: {this.state.data[index].name}</Text>
                                    <Text style={styles.name}>Total seats: {this.state.data[index].persons}</Text>
                                    <Text style={styles.position}>Status: {this.state.data[index].status}</Text>
                                    <Text style={styles.about}>Table no: {this.state.data[index].tableNo}</Text>
                                    <Text style={styles.about}>Table Type: {this.state.data[index].type}</Text>
                                    <Text style={styles.about}>Time: {this.state.data[index].time}</Text>
                                </ScrollView>
                            </View>
                            <View style={styles.popupButtons}>
                                <TouchableOpacity onPress={() => { this.setModalVisible(false) }} style={styles.btnClose}>
                                    <Text style={styles.txtClose}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <FlatList
                    extraData={this.state.refresh}
                    style={styles.contentList}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]} >
                                <Image style={styles.image} source={{ uri: "https://img.icons8.com/clouds/100/000000/groups.png" }} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.count}>{item.status}</Text>
                                    <Text style={styles.count}>{item.time}</Text>
                                    <TouchableOpacity style={styles.followButton} onPress={() => this.clickEventListener(item)}>
                                        <Text style={styles.followButtonText}>Explore now</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#ebf0f7"
    },
    contentList: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: "#ebf0f7"
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        // backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        borderRadius: 30,
    },

    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#3399ff",
        fontWeight: 'bold'
    },
    count: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#6666ff"
    },
    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#dcdcdc",
    },
    followButtonText: {
        color: "#dcdcdc",
        fontSize: 12,
    },


    position: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    about: {
        marginHorizontal: 10
    },
    /************ modals ************/
    popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 0
    },
    popupContent: {
        //alignItems: 'center',
        margin: 5,
        height: 'auto',
    },
    popupHeader: {
        marginBottom: 45
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent: 'center'
    },
    popupButton: {
        flex: 1,
        marginVertical: 16
    },
    btnClose: {
        height: 20,
        backgroundColor: '#20b2aa',
        padding: 20
    },
    modalInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});  