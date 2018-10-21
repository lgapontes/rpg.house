﻿<!DOCTYPE html>
<html lang="en-US">
	<head>
		<title>RPG house</title>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/dungeon.css" />
		<link rel="stylesheet" type="text/css" href="css/checkbox.css" />
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="icon" href="favicon.ico">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		<!-- Images -->
		<img id="background" src="img/background.jpg" alt="Background" />
		<img id="tile" src="img/tile.png" alt="Tile" />
		<img id="tile-cave" src="img/tile-cave.png" alt="Tile Cave" />
		<img id="tile-dungeon" src="img/tile-dungeon.png" alt="Tile Dungeon" />
		<img id="tile-corner-top" src="img/tile-corner-top.png" alt="Tile Corner Top" />
		<img id="tile-corner-right" src="img/tile-corner-right.png" alt="Tile Corner Right" />
		<img id="tile-corner-bottom" src="img/tile-corner-bottom.png" alt="Tile Corner Bottom" />
		<img id="tile-corner-left" src="img/tile-corner-left.png" alt="Tile Corner Left" />
		<img id="door-closed-top" src="img/door-closed-top.png" alt="Closed Door Top" />
		<img id="door-open-top-border" src="img/door-open-top-border.png" alt="Open Door Top (border)" />
		<img id="door-open-top-transparent" src="img/door-open-top-transparent.png" alt="Open Door Top (transparent)" />
		<img id="door-closed-left" src="img/door-closed-left.png" alt="Closed Door Left" />
		<img id="door-open-left-border" src="img/door-open-left-border.png" alt="Open Door Left (border)" />
		<img id="door-open-left-transparent" src="img/door-open-left-transparent.png" alt="Open Door Left (transparent)" />
		<img id="gateway" src="img/gateway.png" alt="Gateway" />
		<img id="stairs" src="img/stairs.png" alt="Stairs" />
		<img id="stairs-cave" src="img/stairs-cave.png" alt="Stairs Cave" />
		<img id="stairs-dungeon" src="img/stairs-dungeon.png" alt="Stairs Dungeon" />

		<img id="furniture_bookshelf_1x3" src="img/furniture_bookshelf_1x3.png" alt="Furniture Bookshelf (1x3)" />
		<img id="furniture_bookshelf_3x1" src="img/furniture_bookshelf_3x1.png" alt="Furniture Bookshelf (3x1)" />
		<img id="furniture_closed_chest_1x2" src="img/furniture_closed_chest_1x2.png" alt="Furniture Closed Chest (1x2)" />
		<img id="furniture_closed_chest_2x1" src="img/furniture_closed_chest_2x1.png" alt="Furniture Closed Chest (2x1)" />
		<img id="furniture_open_chest_1x2" src="img/furniture_open_chest_1x2.png" alt="Furniture Open Chest (1x2)" />
		<img id="furniture_open_chest_2x1" src="img/furniture_open_chest_2x1.png" alt="Furniture Open Chest (2x1)" />
		<img id="furniture_closed_reinforced_chest_1x2" src="img/furniture_closed_reinforced_chest_1x2.png" alt="Furniture Closed Reinforced Chest (1x2)" />
		<img id="furniture_closed_reinforced_chest_2x1" src="img/furniture_closed_reinforced_chest_2x1.png" alt="Furniture Closed Reinforced Chest (2x1)" />
		<img id="furniture_table_2x2" src="img/furniture_table_2x2.png" alt="Furniture Table (2x2)" />

		<canvas id="dungeon"></canvas>
		<h1 id="dungeon-name"></h1>
		<div class="options options-left">
			<div class="pretty p-default">
		        <input id="show-indexes" type="checkbox" />
		        <div class="state">
		            <label for="show-indexes">Show indexes</label>
		        </div>
		    </div>
		</div>

		<script type="text/javascript" src="js/repository.js"></script>
		<script type="text/javascript" src="js/random.js"></script>
		<script type="text/javascript" src="js/constants.js"></script>
		<script type="text/javascript">

			<?php
				$link = "dungeon.php?";

				$map = "house";
				if ( isset($_GET["map"]) ) {
					$map = $_GET["map"];
				}

				$maps = array("verySmallHouse","verySmallCave","verySmallDungeon","smallHouse","smallCave",
				"smallDungeon","house","cave","dungeon","bigHouse","bigCave","bigDungeon","castle",
				"deepCave","deepDungeon","lowTower","tower","highTower");
				if (!in_array($map, $maps)) {
				    $map = "house";
				}
				$link = $link . "map=" . $map;
				$map = "'" . $map . "'";

				$floor = 0;
				if ( isset($_GET["floor"]) ) {
					$floor = intval($_GET["floor"]);
				}
				$link = $link . "&floor=" . ($floor + 1);

				$exit = "false";
				if ( isset($_GET["exit"]) ) {
					$exit = $_GET["exit"] === "on" ? "true" : "false";
				}
				$link = $link . "&exit=" . $exit;

				$name = "mapArchetype.name";
				if ( isset($_GET["name"]) && (strlen($_GET["name"]) > 0) ) {
					$link = $link . "&name=" . $_GET["name"];
					$name = "'" . $_GET["name"] . "'";
				}

				$lastFloor = 0;
				if ( isset($_GET["lastFloor"]) ) {
					$lastFloor = intval($_GET["lastFloor"]);
					$link = $link . "&lastFloor=" . $lastFloor;
				}

				$link = "'" . $link . "'";
			?>

			/* Set uuid */
			var UUID = guid();
			/* Set map size */
			var mapArchetype = MAP_SELECTED[<?=$map?>];
			/* Set number of floor */
			mapArchetype.size.currentFloor = <?=$floor?>;
			<?php
				if ($lastFloor > 0) {
					echo "mapArchetype.size.lastFloor = $lastFloor;\n";
				}
			?>
			/* Set exit */
			var CONTAINS_EXIT = <?=$exit?>;
			/* Set name of dungeon */
			var DUNGEON_NAME = <?=$name?>;
			/* Show all rooms */
			var SHOW_ALL_ROOMS = false;
			/* Next link, if exists */
			var NEXT_FLOOR_LINK = <?=$link?>;

		</script>
		<script type="text/javascript" src="js/dungeon.js"></script>
	</body>
</html>
