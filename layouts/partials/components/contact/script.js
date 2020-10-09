{{- $hyperform := resources.Get "js/hyperform.min.js" -}}
<script type="text/javascript" src="{{ $hyperform.RelPermalink }}"></script>
<script>
  var body = document.body; body.classList.add("js");
  hyperform(window);
  hyperform.addTranslation("fr",{
    TextTooLong:"Veuillez raccourcir ce champ à %l caractères ou moins (vous utilisez actuellement %l caractères).",
    TextTooShort:"Veuillez utiliser au moins %l caractères pour ce champ (vous utilisez actuellement %l caractères).",
    ValueMissing:"Veuillez compléter ce champ.",
    InvalidEmail:"Veuillez saisir une adresse électronique valide.",
    PatternMismatch:"Veuillez modifier la valeur pour correspondre au format demandé.",
  });
  hyperform.setLanguage("fr");
</script>
