var tablenumber = parseInt(prompt("Enter the table number: "));
var tablelength = parseInt(prompt("Enter the length of the table: "));
for (let i = 1; i <= tablelength; i++) {
    document.writeln( `${tablenumber} x ${i} = ${tablenumber * i}`);
}