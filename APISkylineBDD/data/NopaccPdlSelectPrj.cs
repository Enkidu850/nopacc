using System;
using System.Collections.Generic;

namespace APISkylineBDD.data;

public partial class NopaccPdlSelectPrj
{
    public int IdPeriAcc { get; set; }

    public int IdPdlGeo { get; set; }

    public int IdSelect { get; set; }

    public bool Desactive { get; set; }

    public virtual NopaccPdlGeo IdPdlGeoNavigation { get; set; } = null!;
}
