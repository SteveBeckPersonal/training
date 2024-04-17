export default class TriangleGenerator{

    

    generate(rows){
        for(let i =0; i < rows; i++){
            let triangle = "";
            for(let j =0; j <= i; j++){
                triangle += "* "
            }
            console.log(triangle);
        }
    }
}

const triangleGen = new TriangleGenerator();
triangleGen.generate(5);
triangleGen.generate(15);
triangleGen.generate(25);
