using System;
using System.Collections.Generic;

namespace APISkylineBDD.data;

public partial class NopaccPdlProdPrj
{
    public int IdPeriAcc { get; set; }

    public int IdPdlGeo { get; set; }

    public int IdProduct { get; set; }

    public virtual NopaccPdlGeo IdPdlGeoNavigation { get; set; } = null!;
}
