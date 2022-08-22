import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { dataApp } from '../../datas/first'
import RenderItem from './components/RenderItem'

const Index = () => {
  return (
    <View>
        <FlatList
            contentContainerStyle= { styles.flatlist }

            data={dataApp}

            renderItem={ ( {item} ) =>
            <RenderItem item = { item } /> }

            keyExtractor={ (item) => item.id }

            // horizontal
        />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})