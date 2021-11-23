import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import { Message } from '../Message'

export function MessageList() {

    const message = {
        id: '1',
        text: 'mensagem de teste',
        user: {
            name: 'vitor',
            avatar_url: 'https://github.com/vsvsilva.png'
    }
    }

    return (
        <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="never">
            <Message data={message}/>
            <Message data={message}/>
            <Message data={message}/>
        </ScrollView>
    )
}
