let knex=require("knex")({
    client:"mysql",
    connection:{
        user:"root",
        host:"localhost",
        database:"user_i",    // The database has allready  been created. 
        password:"raja@123"
    }
})

// Here is create a Table from knex Query....!

knex.schema.createTable("user_data",(Table)=>{
    Table.increments("id")
    Table.string("Name").notNullable()
    Table.integer("Salary").notNullable()
    Table.date("Date_of_Birth")
    Table.string("Photo_path")
    Table.string('Status')

}).then(()=>{
    console.log("yes");
}).catch(()=>{
    console.log("Table is allready exist");
})


module.exports=knex