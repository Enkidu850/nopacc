<?xml version='1.0' encoding='ISO-8859-1'?>
<xsl:stylesheet version='1.0'
                xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>
<xsl:template match='/'>
	<html>
	<meta http-equiv="X-UA-Compatible"			      content="IE=9"/>
	<head>
	<meta name="viewport" content="initial-scale=1.0"/>
	<style>
		.queryTbl {width:100%; font-family: Calibri,Arial;font-size: 11pt; border-collapse: collapse; }
		.queryTbl td { border: 1px solid gray; cellpadding:3px; cellspacing:3px;} 
	</style>
	</head>
		<body TOPMARGIN='0'			      BOTTOMMARGIN='0'			      LEFTMARGIN='1'			      RIGHTMARGIN='1'>
			
			<table class="queryTbl" >
				<xsl:for-each select='Root/General/*'>
					<tr>
						<td width='90'
							title='{@tooltip}'>
							<b id='{@var}'>
								<xsl:value-of select='@var'/>
							</b>
						</td>
						<td bgcolor='#eeeee'>
							<xsl:value-of select='text()'/>
						</td>
					</tr>
				</xsl:for-each>
				<xsl:if test='count(//Root/FieldsData) != 0'>
					<tr>
						<th align='left'
							bgcolor='#e0e0e0'
							colspan='2'>
							<b>Attributes Information</b>
						</th>
					</tr>
					<xsl:for-each select='Root/FieldsData/*'>
						<tr>
							<td width='90'>
								<b>
									<xsl:value-of select='name()'/>
								</b>
							</td>
							<td bgcolor='#eeeee'>
								<xsl:choose>
									<xsl:when test='string-length(text()) != 0 '>
										<xsl:value-of select='text()'/>
									</xsl:when>
									<xsl:otherwise>
										<xsl:text disable-output-escaping='yes'>&amp;nbsp;</xsl:text>
									</xsl:otherwise>
								</xsl:choose>
							</td>
						</tr>
					</xsl:for-each>
				</xsl:if>
				<xsl:if test='count(//Root/CoordSysData) != 0'>
					<tr>
						<th align='left'
							bgcolor='#e0e0e0'
							colspan='2'>
							<b>Coordinate System</b>
						</th>
					</tr>
					<xsl:for-each select='Root/CoordSysData/*'>
						<tr>
							<td width='90'>
								<b id='{@var}'>
									<xsl:value-of select='@var'/>
								</b>
							</td>
							<td bgcolor='#eeeee'>
								<xsl:value-of select='text()'/>
							</td>
						</tr>
					</xsl:for-each>
				</xsl:if>
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>