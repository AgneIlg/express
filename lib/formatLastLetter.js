


function replace(name) {
   
    if (name.substring(name.length -1) === 'ė') {
        return name.slice(0, -1) + 'e';
    } if (name.substring(name.length -2) === 'as') {
            return name.slice(0, -2) + 'ai';
        } else if (name.substring(name.length -2) === 'us') {
            return name.slice(0, -2) + 'au';
        } else if (name.substring(name.length -2) === 'is') {
            return name.slice(0, -1) + 'i';
        } else {
            return (name)
        }
    }


    export { replace };