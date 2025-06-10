import "server-only"

export const serverSideFunction = () => {
    console.log(
        `use multiple libs
         use ENV variables
         interact with a db`
    ) 
    return "Server Results"
}