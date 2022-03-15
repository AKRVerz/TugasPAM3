import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styles from '../utils/StyleHomePage';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {

    const [cekBerangkat, cariKeberangkatan] = React.useState('');
    const [cekTujuan, cariTujuan] = React.useState('');
    const [cekWaktu, cariWaktu] = React.useState('');

    const cari = () =>{
        navigation.navigate('detail',{
            keberangkatan : cekBerangkat,
            tujuan : cekTujuan,
            waktu: cekWaktu,
        })
    }

    return (
        <SafeAreaView color={'green'} >
                <View style={styles.row}>
                    <FontAwesome name="bars" size={24} color="white" />
                    <FontAwesome name="user-alt" size={24} color="white" />
                </View>
                <View style={styles.centerView}>

                   <View style={styles.marginV}>
                        <Text style={styles.textTitle}>Please Healing Me</Text>
                   </View>
                   <View style={styles.boxmain}>
                       <View style={styles.margins}>
                           <Text style={styles.textSubtittle} >Lokasi Keberangkatan</Text>
                           <TextInput 
                               style={styles.textInput}
                               onChangeText= {(text) => cariKeberangkatan(text)}
                               value={cekBerangkat}
                               placeholder="Lokasi Keberangkatan"
                               />
                            <Text style={styles.textSubtittle}>Lokasi Tujuan</Text>
                            <TextInput 
                                style={styles.textInput}
                                onChangeText= {(text) => cariTujuan(text)}
                                value={cekTujuan}
                                placeholder="Lokasi Tujuan"/>
                            <Text style={styles.textSubtittle}>Waktu Keberangkatan</Text>
                            <TextInput 
                                style={styles.textInput}
                                onChangeText= {(text) => cariWaktu(text)}
                                value={cekWaktu}
                                placeholder="YYYY-MM-DD"/>
                            <Button
                                color={'green'}
                                title="Cari"
                                onPress={cari}
                                />
                       </View>
                   </View>
                </View>
                <View style={styles.copyright}>
                    <Text>Apri Kurniawansyah 119140141</Text>
                </View>
        </SafeAreaView>
    );
};

export default Home;