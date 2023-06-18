import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import { fetchData } from './Axious';
import { ProductType } from '../Type';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'name', width: 170 },
    { field: 'detail', headerName: 'detail', width: 230 },
    { field: 'price', headerName: 'price', width: 230 },
    { field: 'image', headerName: 'image', width: 230 },

];


export default function DataTable() {

    const { data, isLoading, error } = useQuery<ProductType[]>(["prducts"], () => {
        return fetchData("/products.json");
    });

    if (isLoading) {
        return <p>isLoading..</p>
    }

    return (
        data &&
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}