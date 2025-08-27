using System;
using System.Collections.Generic;

namespace APISkylineBDD.data;

public partial class NopaccTarifValue
{
    public int Id { get; set; }

    public int? IdTarif { get; set; }

    public int? AnneeExercice { get; set; }

    public double? TarifEstimeSansTurpeSansCspe { get; set; }

    public double? TurpeEstimePartVariable { get; set; }
}
