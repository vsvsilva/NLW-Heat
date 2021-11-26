import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import LogoSvg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'
import { UserPhoto } from '../UserPhoto'
import { styles } from './styles'

export function Header() {
    const { user } = useAuth()
    return (
        <View style={styles.container}>
            <LogoSvg />
            
            <View style={styles.logoutButton}>
                <TouchableOpacity>
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>

                <UserPhoto imageUri={user?.avatar_url}/>
            </View>
        </View>
    )
}
