using System;
using System.Collections.Generic;
using NetTopologySuite.Geometries;

namespace APISkylineBDD.data;

public partial class NopaccCommune
{
    public int Gid { get; set; }

    public string? Code { get; set; }

    public string? Nom { get; set; }

    public MultiPolygon? Geom { get; set; }

    public string? NomCarto { get; set; }

    public MultiPolygon? GeomCc { get; set; }
}
