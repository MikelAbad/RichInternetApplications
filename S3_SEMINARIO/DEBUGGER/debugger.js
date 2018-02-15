class Ejercicio {


    constructor(){
        this.w = this.width = 194, this.height= 122;
        this.g = Array(this.width*(this.height+2)).fill(0);

        for(let i=0; i< this.width; i++){
           for(let j=0; j< this.height; j++){
               if (j <= 2 || j >= this.height - 2 )
                  this.g[ j*this.width + i ] = 7 ;
               if (i <= 2 || i >= this.width - 2 )
                  this.g[ j*this.width + i ] = 7 ;
            }
        }


    };

    cmp(x, y){
        if (x > y) return 1;
        else if (x < y) return -1;
        else return 0;
    };

    cell_empty(x,y){
        return this.g[this.w*y+x] == 0; 
    };

    pscan(p0,p1){
        let g = this.g;        let [x,y] = p0;        let [x0,y0] = p0;
        let [x1,y1] = p1;
        let ux=this.cmp(x1,x0); 
        let uy=this.cmp(y1,y0);
        let adx = Math.abs(x1-x0)+1; let ady = Math.abs(y1-y0)+1;

        while  (x!=x1 || y!= y1) {
            if (Math.abs((x1-x)*ady) > Math.abs((y1-y)*adx)){
                if (!this.cell_empty(x+ux,y))
                    return [[x+ux,y], [ux,0]];
                else
                    x += 2*ux;
            }else{
                if (! this.cell_empty(x,y+uy))
                    return [[x,y+uy], [0, uy]];
                else
                    y += 2*uy;
            }
        }
        return null;
    };

    prueba(){
          let p0 = [63, 57];
          let p1 = [55, 61];
          let res = this.pscan(p0, p1);
    };

}


let ej = new Ejercicio();
let res = ej.prueba();