const CACHE_NAME = 'fontibus'

const cache = await caches.open(CACHE_NAME);
cache.put('/api/token', Response.redirect('/license', 302))

export default async function findTokenResponses(){
    const options = {
        ignoreSearch: true,
        ignoreMethod: true,
        ignoreVary: true
    }
    const result = await cache.matchAll('/api/token', options)
    return result
}    
