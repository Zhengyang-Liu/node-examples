var rect = require('./rectangle');

function solveReact(l, b)
{
    console.log("Solving for rectangle with l = " + l + ", and b = " + b);

    rect(l, b, (err, rectangle) => {
        if(err)
        {
            console.log("ERROR: ", err.message);
        }
        else
        {
            console.log("The are of the rectangle of dimensions l = " + l + ", and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = " + l + ", and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect");
}

solveReact(2,4);
solveReact(3,5);
solveReact(0,5);
solveReact(-3,5);