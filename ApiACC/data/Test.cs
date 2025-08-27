using System;
using System.Collections.Generic;
using NetTopologySuite.Geometries;

namespace APISkylineBDD.data;

public partial class Test
{
    public int IdPdlGeo { get; set; }

    public bool? UpdatBbuf { get; set; }

    public Point? Geom { get; set; }

    public bool? GeolocaliserDcx { get; set; }

    public string? TypeInvariant { get; set; }

    public string? Invariant { get; set; }

    public string? CodeInsee { get; set; }

    public int? Conso2023 { get; set; }

    public int? Conso2022 { get; set; }

    public int? Conso2021 { get; set; }

    public int? Conso2020 { get; set; }

    public int? IdTarif { get; set; }

    public string? NomTarif { get; set; }

    public string? NumeroRaePce { get; set; }

    public string? InvaSite { get; set; }

    public float? PuissanceSouscriteReduite { get; set; }

    public string? NomPatrimony { get; set; }

    public string? NomPeri { get; set; }

    public bool? ModifGeom { get; set; }

    public int? Diametre { get; set; }

    public string? Deprecie { get; set; }

    public int? IdOwner { get; set; }

    public string? Owner { get; set; }
}
