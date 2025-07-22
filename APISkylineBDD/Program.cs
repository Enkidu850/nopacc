using NetTopologySuite.Geometries;
using APISkylineBDD.data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options => {
    options.AddPolicy(name: "_MyAllowSpecificOrigins",
        policy => {
            policy.AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin();
        });
});
 
//builder.Services.AddDbContext<[DataContext]>());
var app = builder.Build();
DataContext db = new DataContext();

//app.MapGet("/", async (DataContext db) => await db.NopaccPdlGeos.ToListAsync());
app.MapGet("/test", () => "Hello World!");
app.MapGet("/test/{name}", (string name) => $"Hello {name}!");

PointDeLivraison nouveau_pdl = new PointDeLivraison(1, 10.5f, 20.3f);
app.MapGet("/pdl", () => $"ID : {nouveau_pdl.Id}, X : {nouveau_pdl.X}, Y : {nouveau_pdl.Y}");

// POST permet de modifier un pdl dans la bdd
app.MapPost("/pdl/edit/", async (PointDeLivraison pdl) => {
    var p = new Point(pdl.X, pdl.Y);
    var pdl_en_base = db.NopaccPdlGeos.FirstOrDefault(p => p.IdPdlGeo == pdl.Id);
    pdl_en_base.Geom = p;
    pdl_en_base.Owner = pdl.Owner;
    db.NopaccPdlGeos.Update(pdl_en_base);
    await db.SaveChangesAsync();
    return Results.Ok(pdl);
});

// app.MapPost("/peri/add/", async (Perimetre peri) => {
//     var pdl = db.NopaccPdlGeos.FirstOrDefault(p => p.IdPdlGeo == peri.IdPdlGeo);
//     peri.X = pdl.Geom.X;
//     peri.Y = pdl.Geom.Y;
//     db.NopaccPeriAccs.Add(peri);
//     await db.SaveChangesAsync();
//     return Results.Ok(peri);
// });

// GET permet de récupérer un pdl par son ID
app.MapGet("/pdl/{id}", (int id) => {
    var pdl = db.NopaccPdlGeos.Where(p => p.IdPdlGeo == id).FirstOrDefault();
    var infos_pdl = new Dictionary<string, object> {
        { "nom_patrimony", pdl.NomPatrimony },
        { "owner", pdl.Owner },
        { "conso_2023", pdl.Conso2023 },
        { "conso_2022", pdl.Conso2022 },
        { "conso_2021", pdl.Conso2021 },
        { "conso_2020", pdl.Conso2020 },
        { "puissance_souscrite_reduite", pdl.PuissanceSouscriteReduite },
        { "numero_rae_pce", pdl.NumeroRaePce },
        { "nom_tarif", pdl.NomTarif },
        { "invariant", pdl.Invariant },
        { "x", pdl.Geom.X },
        { "y", pdl.Geom.Y }
    };
    return Results.Ok(infos_pdl);
});

app.UseCors("_MyAllowSpecificOrigins");
app.Run();
