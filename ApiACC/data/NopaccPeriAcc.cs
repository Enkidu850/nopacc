using System;
using System.Collections.Generic;
using NetTopologySuite.Geometries;

namespace APISkylineBDD.data;

public partial class NopaccPeriAcc
{
    public int IdPeriAcc { get; set; }

    public Polygon? Geom { get; set; }

    public string? NomPeri { get; set; }

    public DateOnly? DateCrea { get; set; }

    public bool? Derogation { get; set; }

    public string? FiltOwner { get; set; }

    public string? FiltDecocheOwner { get; set; }

    public string? FiltCcOwner { get; set; }

    public string? FiltPdl { get; set; }

    public string? IdPdlProduct { get; set; }

    public string? FiltNom { get; set; }

    public string? FiltPuissance { get; set; }

    public string? FiltConso { get; set; }

    public string? FiltCommunesGeo { get; set; }

    public string? FiltTarif { get; set; }
}
