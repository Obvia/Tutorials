#pragma strict

private var _characterMeshIndex = 0;
private var ca : CharacterAssets;

function Start() {
	ca = GameObject.Find("CharacterAssetsManager").GetComponent(CharacterAssets);
	InstantiateCharacterMesh();
	
}

function InstantiateCharacterMesh(){
	var mesh : GameObject = Instantiate(ca.characterMesh[_characterMeshIndex], transform.position, Quarternion.identity) as GameObject ;
}