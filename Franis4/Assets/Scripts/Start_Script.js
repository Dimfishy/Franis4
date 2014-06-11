var enterButton : KeyCode;

function Start(){
}

function Update () {
if(Input.GetKeyDown(enterButton)){
Application.LoadLevel(1);
}

}