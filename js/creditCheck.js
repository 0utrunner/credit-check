exports.creditCheck = function(str) {
        str = str.split('')
        let double = 0
        let newNumber = []
        let number = ''
        let converter = []
    
        for(let i = str.length - 1; i >= 0; i--){
            if(double == 1){
                number = parseInt(str[i] * 2)
                if(number > 9){
                    converter = []
                    number = number.toString().split('')
                    converter.push(number[0], number[1])
                    converter = parseInt(converter[0]) + parseInt(converter[1])
                    newNumber.unshift(converter.toString())
                    double--
                } else {
                    newNumber.unshift(parseInt(str[i] * 2).toString())
                    double--
                }
            } else {
                newNumber.unshift(str[i])
                double++
            }
        }
        newNumber = newNumber.reduce((previousValue, currentValue) =>  parseInt(previousValue) + parseInt(currentValue))
        
        return newNumber % 10  == 0 ? 'The number is valid!' : 'The number is invalid!'
    }