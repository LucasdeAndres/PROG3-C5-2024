import {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
        }
    }

    onSubmit(){
        console.log(this.state)
    }

    render(){
        return(
            <View>
                <Text>
                    Login
                </Text>
                <TextInput keyboardType='email-address' 
                placeholder='email'
                onChangeText={text => this.setState({email: text})}
                value={this.state.email}
                />
                <TextInput keyboardType='default'
                placeholder='password'
                secureTextEntry={true}
                onChangeText={text => this.setState({password:text})}
                value={this.state.password} 
                />
                <TouchableOpacity onPress={()=>this.onSubmit()}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default Login;