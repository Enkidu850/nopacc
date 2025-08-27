namespace Api;

public class Perimetre
{
    public int Id { get; set; }
    public int IdPdlGeo { get; set; }
    public double X { get; set; }
    public double Y { get; set; }
    public int Rayon { get; set; }
    public string NomPeri { get; set; } = string.Empty;
    public string DateCrea { get; set; } = string.Empty;

    public Perimetre() { }

    public Perimetre(int id, double x, double y)
    {
        Id = id;
        X = x;
        Y = y;
    }

    public void Modifier(int id, double x, double y)
    {
        Id = id;
        X = x;
        Y = y;
    }
}
