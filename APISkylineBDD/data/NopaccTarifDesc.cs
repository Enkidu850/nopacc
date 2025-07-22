using System;
using System.Collections.Generic;

namespace APISkylineBDD.data;

public partial class NopaccTarifDesc
{
    public int IdTarif { get; set; }

    public string? Segment { get; set; }

    public string? IntituleMarche { get; set; }

    public string? Tarif { get; set; }

    public string? SegmentTarif { get; set; }

    public string? ClasseTemporelle { get; set; }

    public string? SegmentTarifCt { get; set; }
}
