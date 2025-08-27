namespace Api;

public class PointDeLivraison
{
    public int Id { get; set; }
    public float X { get; set; }
    public float Y { get; set; }
    public string NomPatrimony { get; set; } = string.Empty;
    public string Owner { get; set; } = string.Empty;

    public PointDeLivraison() { }

    public PointDeLivraison(int id, float x, float y)
    {
        Id = id;
        X = x;
        Y = y;
    }

    public void Modifier(int id, float x, float y)
    {
        Id = id;
        X = x;
        Y = y;
    }
}
