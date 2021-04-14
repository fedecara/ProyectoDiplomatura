var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if(err) throw err;
    var dbo = db.db("votante2app");
    var candidatos = [
        { identificador: "1", Precidentenombre: "Capitan America" ,Partidopolitico: "Juntos por el Cambio",Imagen:"images/Candidatos/Capitan-America.jpg", cantvotos:0 },
        { identificador: "2",Precidentenombre: "Iron Man", Partidopolitico: "Frente de Todos", Imagen:"images/Candidatos/Tony-Stark.jpg", cantvotos:0},
        { identificador: "3",Precidentenombre: "Batman", Partidopolitico: "Consenso Federal", Imagen:"images/Candidatos/Batman.jpg", cantvotos:0},
        { identificador: "4",Precidentenombre: "Superman", Partidopolitico: "Propuesta Republicana", Imagen:"images/Candidatos/Superman.jpg", cantvotos:0},
        { identificador: "5",Precidentenombre: "Yoda ",  Partidopolitico: "Frente Nos", Imagen:"images/Candidatos/yoda.jpg", cantvotos:0},
        { identificador: "6",Precidentenombre: "Anakin skywalker" ,Partidopolitico: "Partido Libertario", Imagen:"images/Candidatos/star-wars-1.jpg", cantvotos:0},
    ];
    dbo.collection("candidatos").insertMany(candidatos, function(err,res) {
        if (err) throw err;
        console.log("Numero de documentos insertados:" + res.insertedCount);
        db.close();
        });
});


