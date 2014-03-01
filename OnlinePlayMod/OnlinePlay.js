(function()
{
  
   OnlinePlayPlugins.initCompatibilityCheck()// Disables Problem Mods (Cheat mods)


	GDT.loadJs(
	[
		'mods/OnlinePlay/Plugins' && 'mods/OnlinePlay/Source/Main.js'
	], ready, error);
})();