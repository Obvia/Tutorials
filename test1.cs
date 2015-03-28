private int characterMeshIndex = 0;
private CharacterAssets ca;

public void Start(){
	ca = GameObject.Find("CharacterAssetsManager").GetComponent(CharacterAssets);
}

public void InstantiateCharacterMesh(){
	GameObject mesh  = (GameObject)(Instantiate(ca.characterMesh[_characterMeshIndex], transform.position, Quarternion.identity))  ;
}