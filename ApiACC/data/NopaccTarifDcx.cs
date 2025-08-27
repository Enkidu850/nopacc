using System;
using System.Collections.Generic;

namespace APISkylineBDD.data;

public partial class NopaccTarifDcx
{
    public int IdCorrespondance { get; set; }

    public int? IdTarif { get; set; }

    public string? NomDcx { get; set; }

    public int? NbDcx { get; set; }
}
