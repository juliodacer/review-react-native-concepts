import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { reqResApi } from '../api/reqRes';



export const Users = () => {
    useEffect(() => {
        reqResApi.get('/users').then(
            resp => {
                console.log('RESP', JSON.stringify(resp?.data.data, null, 2))
            }
        ).catch(console.log)
    }, [])
    return (
        <>
            <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title>Avatar</DataTable.Title>
                    <DataTable.Title>Nombre</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Radhika</DataTable.Cell>
                    <DataTable.Cell>Dosa</DataTable.Cell>
                    <DataTable.Cell>23</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Krishna</DataTable.Cell>
                    <DataTable.Cell>Uttapam</DataTable.Cell>
                    <DataTable.Cell>26</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Vanshika</DataTable.Cell>
                    <DataTable.Cell>Brownie</DataTable.Cell>
                    <DataTable.Cell>20</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Teena</DataTable.Cell>
                    <DataTable.Cell>Pizza</DataTable.Cell>
                    <DataTable.Cell>24</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
    title: {
        fontSize: 23,
        fontWeight: '900'
    }
});