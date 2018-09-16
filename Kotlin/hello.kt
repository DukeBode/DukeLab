fun main(args:Array<String>){
    var n = 1
    for (i in 101..200 step 2){
        var f
        for(j in 2..i){
            if (i%j==0)break
            f=Flase
        }
        if(f)continue
        print(i)
        print(" ")
    }
}
