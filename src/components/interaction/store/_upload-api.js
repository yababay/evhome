import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseUrl = '/api/upload'

export default createApi({
    reducerPath: 'uploadApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        uploadText: builder.mutation({
            query: body => ({
                url: '/text',
                method: 'POST',
                body
            })
        })
    })
})
