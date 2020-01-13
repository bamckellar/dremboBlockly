'use strict';
Blockly.Blocks['minecraft_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import minecraft");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245)
    this.setTooltip("Imports the Minecraft library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_player_setpos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Teleport player to:");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Teleport player by setPos");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['new_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("new Location");
    this.appendValueInput("x")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(32);
    this.setTooltip('Create a new location with X, Y, and Z!');
    this.setHelpUrl('Yeah!');
  }
};

Blockly.Blocks['minecraft_player_settilepos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send player to tile: ")
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Send player to tile with setTilePos");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_entity_settilepos'] = {
  init: function() {
    this.appendValueInput("entityid")
        .setCheck("Number")
        .appendField("Send entity with ID:");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("to: X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Send entity with ID to tile with entity.setTilePos - takes integers only");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_setblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set block of:")
        .appendField(new Blockly.FieldDropdown([["Wood","17"], ["Air","0"], ["Glass","20"], ["Dirt","3"], ["Cobblestone","4"], ["TNT","46"]]), "block_type");
    this.appendDummyInput()
        .appendField(" at:");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Set a block at a given position.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_spawnentity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Spawn")
        .appendField(new Blockly.FieldDropdown([["Pig","90"], ["Sheep","91"], ["Cow","92"], ["Chicken","93"], ["Rabbit","101"]]), "mob");
    this.appendDummyInput()
        .appendField(" at:");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Drop a mob at a given position.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_spawnentitywithid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Spawn")
        .appendField(new Blockly.FieldDropdown([["Pig","90"], ["Sheep","91"], ["Cow","92"], ["Chicken","93"], ["Rabbit","101"]]), "mob");
    this.appendDummyInput()
        .appendField(" at:");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.appendValueInput("entityID")
        .setCheck("Number")
        .appendField("and set Entity ID to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Drop a mob at position x,y,z and return the mob entityID.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_removeentity'] = {
  init: function() {
    this.appendValueInput("entityid")
        .setCheck("Number")
        .appendField("Remove entity with ID:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Remove entity with ID - takes an integer");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_getblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get block type at: ");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(245);
 this.setTooltip("Get the ID of the block type at specified coordinates.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_setblocks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make a box of ")
        .appendField(new Blockly.FieldDropdown([["Wood","17"], ["Air","0"], ["Glass","20"], ["Dirt","3"], ["Cobblestone","4"], ["TNT","46"]]), "blockType");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(" at: X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("of width:");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("height:");
    this.appendValueInput("length")
        .setCheck("Number")
        .appendField("length:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Create a box at set location of width, height, length.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_setsign'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set SIGN at:");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.appendDummyInput()
        .appendField("Facing")
        .appendField(new Blockly.FieldDropdown([["South","0"], ["Southwest","2"], ["West","4"], ["Northwest","6"], ["North","8"], ["Northeast","10"], ["East","12"], ["Southeast","14"]]), "facing");
    this.appendValueInput("line1")
        .setCheck("String")
        .appendField("with line 1:");
    this.appendValueInput("line2")
        .setCheck("String")
        .appendField("line 2:");
    this.appendValueInput("line3")
        .setCheck("String")
        .appendField("line 3:");
    this.appendValueInput("line4")
        .setCheck("String")
        .appendField("line 4:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Set a sign at given position. Max 15 characters per line!!");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_getpos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("player's position");
    this.setOutput(true, "Number");
    this.setColour(245);
 this.setTooltip("Returns the player's position to the assigned variable..");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_getpos_xyz'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get: ")
        .appendField(new Blockly.FieldDropdown([["X","x"], ["Y","y"], ["Z","z"]]), "axis");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(" from player's position variable:");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(245);
 this.setTooltip("Returns the player's position on the axis selected.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_getpos_all_in_one'] = {
  init: function() {
    this.appendValueInput("posVar")
        .setCheck(null)
        .appendField("From player's position variable:");
    this.appendValueInput("posX")
        .setCheck(null)
        .appendField(" Get pos.x");
    this.appendValueInput("posY")
        .setCheck(null)
        .appendField(" pos.y");
    this.appendValueInput("posZ")
        .setCheck(null)
        .appendField("and pos.z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Returns all 3 player TILE position values (x, y, z) - returns integers");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_entity_gettilepos'] = {
  init: function() {
    this.appendValueInput("entityid")
        .setCheck("Number")
        .appendField("For entity of ID: ");
    this.appendValueInput("ePosVar")
        .setCheck(null)
        .appendField("from position variable:");
    this.appendValueInput("ePosX")
        .setCheck(null)
        .appendField(" Get ePos.x");
    this.appendValueInput("ePosY")
        .setCheck(null)
        .appendField(" ePos.y");
    this.appendValueInput("ePosZ")
        .setCheck(null)
        .appendField("and ePos.z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Returns all 3 entity TILE position values (x, y, z) - returns integers");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_getheight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get height of block at: ");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(245);
 this.setTooltip("Get the ID of the block type at specified coordinates.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_post_to_chat'] = {
  init: function() {
    this.appendValueInput("messageToPost")
        .setCheck(null)
        .appendField("Post this to chat: ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("This message will appear in Minecraft chat window.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_setting_immutable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("World is indestructible: ")
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "destructTrueFalse");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("This will make the world indestructible when true.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_pollchatposts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("listen for a")
        .appendField(new Blockly.FieldVariable("chatPost"), "chatPost")
        .appendField("in the chat.");
    this.appendStatementInput("listenFor")
        .setCheck(null)
        .appendField("and do this:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Puts each line of chat into variable ctMessage");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_pollhits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for a")
        .appendField(new Blockly.FieldDropdown([["sword","Block"], ["arrow","Projectile"]]), "getHitType")
        .appendField(new Blockly.FieldVariable("weaponHit"), "weaponhit");
    this.appendStatementInput("thenDoThis")
        .setCheck(null)
        .appendField("and do this:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Listens for block(sword) or projectile(arrow) hits.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_custom_code'] = {
  init: function() {
    this.appendValueInput("custom_code")
        .setCheck("String")
        .appendField("enter your own line of code:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(245);
 this.setTooltip("Adds your own line of code through the text field.");
 this.setHelpUrl("");
  }
};

// ============================================================== Generator of the code ==============================================================
Blockly.Python['minecraft_import'] = function(block) {
  // Imports the minecraft library
  var code = 'from mcpi.minecraft import Minecraft\nmc = Minecraft.create()\n';
  return code;
};

Blockly.Python['minecraft_player_setpos'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var code = 'mc.player.setPos(' + value_x + ','  + value_y + ','  + value_z + ')\n';
  return code;
};

Blockly.Python['minecraft_player_settilepos'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var code = 'mc.player.setTilePos(' + value_x + ','  + value_y + ','  + value_z + ')\n';
  return code;
};

Blockly.Python['minecraft_entity_settilepos'] = function(block) {
  var entityid = Blockly.Python.valueToCode(block, 'entityid', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mc.entity.setTilePos(' + entityid + ',' + value_x + ','  + value_y + ','  + value_z + ')\n';
  return code;
};

Blockly.Python['minecraft_setblock'] = function(block) {
  var dropdown_block_type = block.getFieldValue('block_type');
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var code = 'mc.setBlock(' + value_x + ','  + value_y + ','  + value_z + ',' + dropdown_block_type +')\n';
  return code;
};

Blockly.Python['minecraft_spawnentity'] = function(block) {
  var dropdown_mob = block.getFieldValue('mob');
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var code = 'mc.spawnEntity(' + value_x + ','  + value_y + ','  + value_z + ',' + dropdown_mob +')\n';
  return code;
};

Blockly.Python['minecraft_spawnentitywithid'] = function(block) {
  var dropdown_mob = block.getFieldValue('mob');
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var value_entityid = Blockly.Python.valueToCode(block, 'entityID', Blockly.Python.ORDER_ATOMIC);
  var code = value_entityid + ' = mc.spawnEntity(' + value_x + ','  + value_y + ','  + value_z + ',' + dropdown_mob +')\n';
  return code;
};

Blockly.Python['minecraft_removeentity'] = function(block) {
  var entityid = Blockly.Python.valueToCode(block, 'entityid', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mc.removeEntity(' + entityid + ')\n';
  return code;
};

Blockly.Python['minecraft_getblock'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var code = ' mc.getBlock(' + value_x + ','  + value_y + ','  + value_z + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['minecraft_setblocks'] = function(block) {
  var dropdown_blocktype = block.getFieldValue('blockType');
  var start_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var start_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var start_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  var value_length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC);
  var end_x = Number(start_x) + Number(value_width) - 1;
  var end_y = Number(start_y) + Number(value_height) - 1;
  var end_z = Number(start_z) + Number(value_length) - 1;
  var code = 'mc.setBlocks(' + start_x + ','  + start_y + ','  + start_z + ',' + end_x + ','  + end_y + ','  + end_z + ',' + dropdown_blocktype +')\n';
  return code;
};

Blockly.Python['minecraft_setsign'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var dropdown_facing = block.getFieldValue('facing');
  var value_line1 = Blockly.Python.valueToCode(block, 'line1', Blockly.Python.ORDER_ATOMIC);
  var value_line2 = Blockly.Python.valueToCode(block, 'line2', Blockly.Python.ORDER_ATOMIC);
  var value_line3 = Blockly.Python.valueToCode(block, 'line3', Blockly.Python.ORDER_ATOMIC);
  var value_line4 = Blockly.Python.valueToCode(block, 'line4', Blockly.Python.ORDER_ATOMIC);
  //var value_messagetopost = Blockly.Python.valueToCode(block, 'messageToPost', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  value_line1 = value_line1.replace('text Line1','');
  value_line2 = value_line2.replace('text Line2','');
  value_line3 = value_line3.replace('text Line3','');
  value_line4 = value_line4.replace('text Line4','');  
  var code = 'mc.setSign(' + value_x + ','  + value_y + ','  + value_z + ',63,' + dropdown_facing + ',' + value_line1 + ',' + value_line2 + ',' + value_line3 + ',' + value_line4 + ')\n';
  //var code = 'mc.setSign(' + value_x + ','  + value_y + ','  + value_z + ',63,' + dropdown_facing + ',"' + value_line1 + '","' + value_line2 + '","' + value_line3 + '","' + value_line4 + '")\n';
  return code;
};

Blockly.Python['minecraft_getpos'] = function(block) {
  var code = 'mc.player.getPos()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['minecraft_getpos_xyz'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_name + '.' + dropdown_axis + '\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['minecraft_getpos_all_in_one'] = function(block) {
  var value_posvar = Blockly.Python.valueToCode(block, 'posVar', Blockly.Python.ORDER_ATOMIC);
  var value_posx = Blockly.Python.valueToCode(block, 'posX', Blockly.Python.ORDER_ATOMIC);
  var value_posy = Blockly.Python.valueToCode(block, 'posY', Blockly.Python.ORDER_ATOMIC);
  var value_posz = Blockly.Python.valueToCode(block, 'posZ', Blockly.Python.ORDER_ATOMIC);
  var getThePos = value_posvar + ' = mc.player.getTilePos()\n';
  var getTheX = value_posx + ' = ' + value_posvar + '.x\n';
  var getTheY = value_posy + ' = ' + value_posvar + '.y\n';
  var getTheZ = value_posz + ' = ' + value_posvar + '.z\n';
  var code = getThePos + getTheX + getTheY + getTheZ;
  return code;
};

Blockly.Python['minecraft_entity_gettilepos'] = function(block) {
  var value_entityid = Blockly.Python.valueToCode(block, 'entityid', Blockly.Python.ORDER_ATOMIC);
  var value_eposvar = Blockly.Python.valueToCode(block, 'ePosVar', Blockly.Python.ORDER_ATOMIC);
  var value_eposx = Blockly.Python.valueToCode(block, 'ePosX', Blockly.Python.ORDER_ATOMIC);
  var value_eposy = Blockly.Python.valueToCode(block, 'ePosY', Blockly.Python.ORDER_ATOMIC);
  var value_eposz = Blockly.Python.valueToCode(block, 'ePosZ', Blockly.Python.ORDER_ATOMIC);
  var getTheEPos = value_eposvar + ' = mc.entity.getTilePos(' + value_entityid + ')\n';
  var getTheEX = value_eposx + ' = ' + value_eposvar + '.x\n';
  var getTheEY = value_eposy + ' = ' + value_eposvar + '.y\n';
  var getTheEZ = value_eposz + ' = ' + value_eposvar + '.z\n';
  var code = getTheEPos + getTheEX + getTheEY + getTheEZ;
  return code;
};

Blockly.Python['minecraft_getheight'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var code = ' mc.getHeight(' + value_x + ','  + value_z + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['minecraft_post_to_chat'] = function(block) {
  var value_messagetopost = Blockly.Python.valueToCode(block, 'messageToPost', Blockly.Python.ORDER_ATOMIC);
  var theStart = 'mc.postToChat(';
  var theEnd = ')\n'
  var code = theStart + value_messagetopost + theEnd;
  return code;
};

Blockly.Python['minecraft_setting_immutable'] = function(block) {
  var dropdown_destructtruefalse = block.getFieldValue('destructTrueFalse');
  var code = 'mc.setting("world_immutable", ' + dropdown_destructtruefalse + ')\n';
  return code;
};

Blockly.Python['minecraft_pollchatposts'] = function(block) {
  var chat_post = Blockly.Python.variableDB_.getName(block.getFieldValue('chatPost'), Blockly.Variables.NAME_TYPE);
  var branchListen = Blockly.Python.statementToCode(block, 'listenFor');

  branchListen = Blockly.Python.addLoopTrap(branchListen, block) || Blockly.Python.PASS;
  if (branchListen.includes(chat_post)) {
    var branchListen = branchListen.replace(chat_post, chat_post + ".message");
  }
  var code = 'for ' + chat_post + ' in mc.player.pollChatPosts():\n' + branchListen;
  return code;
};

Blockly.Python['minecraft_pollhits'] = function(block) {
  var dropDownHitType = block.getFieldValue('getHitType');
  var weapon_hit = Blockly.Python.variableDB_.getName(block.getFieldValue('weaponhit'), Blockly.Variables.NAME_TYPE);
  var statements_thendothis = Blockly.Python.statementToCode(block, 'thenDoThis');
  var branchThenDoThis = Blockly.Python.addLoopTrap(statements_thendothis, block) || Blockly.Python.PASS;
  var code = 'for ' + weapon_hit + ' in mc.player.poll' + dropDownHitType + 'Hits():\n' + branchThenDoThis;
  return code;
};

Blockly.Python['minecraft_custom_code'] = function(block) {
  var value_custom_code = Blockly.Python.valueToCode(block, 'custom_code', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_custom_code.slice(1, -1) + '\n';
  return code;
};