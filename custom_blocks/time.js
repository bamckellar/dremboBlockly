'use strict';
Blockly.Blocks['time_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import time");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('time_blocks');
    this.setTooltip("Imports the time library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("time.sleep")
        .appendField(new Blockly.FieldNumber(5, 0, 100000), "numSeconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('time_blocks');
 this.setTooltip("Sleep for this many seconds.");
 this.setHelpUrl("");
  }
}

// Generator of the code
Blockly.Python['time_import'] = function(block) {
  // Imports the time library
  var code = 'import time\n';
  return code;
};

Blockly.Python['time_sleep'] = function(block) {
  var number_numseconds = block.getFieldValue('numSeconds');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep(' + number_numseconds + ')\n';
  return code;
};