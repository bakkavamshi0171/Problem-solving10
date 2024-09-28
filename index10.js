let rows = 5;
for(i=1;i<=rows;i++){
    res= ""
    for(j=1;j<=i;j++){
        if(j==1||j==i||i==rows)
        res = res + j + " "
        else 
        res = res + "  "
    }
    console.log(res)
}

// output:
// 1 
// 1 2
// 1   3
// 1     4
// 1 2 3 4 5

let row =5
for(i=1;i<=row;i++){
    res = ""
   for(j=1;j<=row;j++){
       if(i==1)
       res = res + j+ " ";
       else if(j==1)
       res = res+ i +" ";
       else if(i+j == row+1)
       res = res + row + " ";
      else 
      res = res + "  "
   }
   console.log(res)
}



// output:
// 1 2 3 4 5
// 2     5
// 3   5
// 4 5
// 5