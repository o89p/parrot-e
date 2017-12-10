const arrayParrotsLD = ['angelparrot','angryparrot','aussiecongaparrot','aussieparrot','aussiereversecongaparrot','bananaparrot','beretparrot','blondesassyparrot','bluescluesparrot','boredparrot','chillparrot','christmasparrot','coffeeparrot','confusedparrot','congaparrot','congapartyparrot','darkbeerparrot','dealwithitparrot','dreidelparrot','evilparrot','explodyparrot','fastparrot','fidgetparrot','fiestaparrot','gentlemanparrot','gothparrot','halalparrot','hamburgerparrot','harrypotterparrot','ice-cream-parrot','invisibleparrot','loveparrot','luckyparrot','margaritaparrot','matrixparrot','middleparrot','moonwalkingparrot','oldtimeyparrot','papalparrot','parrot','parrottxt','parrotbeer','parrotcop','parrotdad','parrotmustache','parrotsleep','parrotwave1','parrotwave2','parrotwave3','parrotwave4','parrotwave5','parrotwave6','parrotwave7','partyparrot','pizzaparrot','prideparrot','reversecongaparrot','rightparrot','rotatingparrot','ryangoslingparrot','sadparrot','sassyparrot','scienceparrot','shipitparrot','shufflefurtherparrot','shuffleparrot','shufflepartyparrot','skiparrot','slomoparrot','slowparrot','stableparrot','stalkerparrot','tacoparrot','thumbsupparrot','tripletsparrot','twinsparrot','ultrafastparrot','upvotepartyparrot'];
const arrayParrotsHD = ['hd/angelparrot','hd/beretparrot','hd/birthdaypartyparrot','hd/bluntparrot','hd/christmasparrot','hd/congaparrot','hd/dealwithitparrot','hd/discoparrot','hd/donutparrot','hd/gentlemanparrot','hd/jediparrot','hd/middleparrot','hd/parrot','hd/popcornparrot','hd/prideparrot','hd/pumpkinparrot','hd/revolutionparrot','hd/rightparrot','hd/sadparrot','hd/scienceparrot','hd/shuffleparrot','hd/sintparrot','hd/sushiparrot','hd/wendyparrot']
const arrayParrots = arrayParrotsHD;
const parrotPopulation = arrayParrots.length;

Array.forEach(document.getElementsByTagName('img'),(orig) => {
  //console.log(arrayParrots[0]);
    var origHeight = orig.height;
    console.log(`orig.height${origHeight}`);
    var parrotURL = `parrots/${arrayParrots[Math.floor(Math.random() * parrotPopulation)]}.gif`;
    orig.src = "http://cultofthepartyparrot.com/parrots/hd/parrot.gif";
    //orig.src document.extension.getURL(parrotURL);
    orig.height = origHeight;
});
