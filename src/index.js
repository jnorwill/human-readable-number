module.exports = function toReadable(number) {
    const arr = String(number).split('')

    if (number == 0) return 'zero'
    let a = (arr[arr.length-1] == 1 && arr[arr.length-2] != 1) ?  'one':
    (arr[arr.length-1] == 2 && arr[arr.length-2] != 1) ? 'two':
    (arr[arr.length-1] == 3 && arr[arr.length-2] != 1) ? 'three':
    (arr[arr.length-1] == 4 && arr[arr.length-2] != 1) ? 'four':
    (arr[arr.length-1] == 5 && arr[arr.length-2] != 1) ? 'five':
    (arr[arr.length-1] == 6 && arr[arr.length-2] != 1) ? 'six':
    (arr[arr.length-1] == 7 && arr[arr.length-2] != 1) ? 'seven':
    (arr[arr.length-1] == 8 && arr[arr.length-2] != 1) ? 'eight':
    (arr[arr.length-1] == 9 && arr[arr.length-2] != 1) ? 'nine':
    '';    
    
    let b = (arr[arr.length-2] == 1) ? (arr[arr.length-1] == 0) ? 'ten' :  
        (arr[arr.length-1] == 1) ? 'eleven' : 
        (arr[arr.length-1] == 2) ? 'twelve' :  
        (arr[arr.length-1] == 3) ? 'thirteen' :  
        (arr[arr.length-1] == 4) ? 'fourteen' :  
        (arr[arr.length-1] == 5) ? 'fifteen' :  
        (arr[arr.length-1] == 6) ? 'sixteen' :  
        (arr[arr.length-1] == 7) ? 'seventeen' :  
        (arr[arr.length-1] == 8) ? 'eighteen' :  
        'nineteen' :
(arr[arr.length-2] == 2) ? 'twenty':
(arr[arr.length-2] == 3) ? 'thirty':
(arr[arr.length-2] == 4) ? 'forty':
(arr[arr.length-2] == 5) ? 'fifty':
(arr[arr.length-2] == 6) ? 'sixty':
(arr[arr.length-2] == 7) ? 'seventy':
(arr[arr.length-2] == 8) ? 'eighty':
(arr[arr.length-2] == 9) ? 'ninety':
'';
let c = (arr[arr.length-3] == 1) ?  'one hundred':
(arr[arr.length-3] == 2) ? 'two hundred':
(arr[arr.length-3] == 3) ? 'three hundred':
(arr[arr.length-3] == 4) ? 'four hundred':
(arr[arr.length-3] == 5) ? 'five hundred':
(arr[arr.length-3] == 6) ? 'six hundred':
(arr[arr.length-3] == 7) ? 'seven hundred':
(arr[arr.length-3] == 8) ? 'eight hundred':
(arr[arr.length-3] == 9) ? 'nine hundred':
'';
    
    
     
    return `${c ? c + ' ' : ''}${b ? b + ' ' : ''}${a}`.replace(/ $/, '')
    

}
