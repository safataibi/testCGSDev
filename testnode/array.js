function array.prototype (generateArray){
  var r = Math.round (Math.random() * (tab.length - 1));
  var rec = tab[r];
  tab.splice (r, 1);
  return rec;
}

A1 = {hair:"straight"};
B1 = {hair:"curly"};

A2 = {skincolor:"white"}
B2 = {skincolor:"black"}

A3 = {gender:"women"}
B3 = {gender:"men"}

A4 = {langage:"english"}
B4 = {langage:"french"}

Tableau = [[A1, B1], [A2, B2], [A3, B3], [A4, B4]] ;

while (Tableau.length)
{
    var rec = array.prototype(Tableau);
    trace (rec.Nom);
}
