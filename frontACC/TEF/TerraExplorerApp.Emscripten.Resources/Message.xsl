<?xml version='1.0' encoding='UTF-8'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">	
<xsl:template match="/">					  
<html>
<META http-equiv="Content-Type" content="text/html; charset=UTF-16"/>
  <head>
  <meta name="viewport" content="initial-scale=1.0"/>
    <style>
      .xslStyle8 {font-family:  Arial, Helvetica; font-size: 10pt; font-style: normal; font-weight: normal; color: #3B3B3B; text-decoration: none;}
      .xslStyle9 {font-family:  Arial, Helvetica; font-size: 11pt; font-style: normal; font-weight: normal; color: #3B3B3B; text-decoration: none;}
      .xslStyle8w {font-family:  Arial, Helvetica; font-size: 10pt; font-style: normal; font-weight: normal; color: #FFFFFF; text-decoration: underline;}
      .xslStyle12 {font-family:  Arial, Helvetica; font-size: 14pt; font-style: normal; font-weight: normal; color: #000000; text-decoration: none;}
      .xslStyleTable TD {border:solid 1px #233141; padding:4pt; }
    </style>
</head>
 <body  bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" class="xslStyle9">

<table border="0" cellspacing="0" cellpadding="0" width="100%" class="xslStyleTable xslStyle9">
	<tr> 
	<xsl:if test= "string-length(//DOCUMENT_LIST/DOCTITLE/IMAGE/text())>7">	
		<td class="xslStyle12" align="left" style="border:solid 0px white;filter:progid:DXImageTransform.Microsoft.Gradient(endColorstr='#FFFFFF', startColorstr='#3F5875', gradientType='0');"><img src="{//DOCUMENT_LIST/DOCTITLE/IMAGE/text()}"/></td>
		</xsl:if>
		  <td align='center' class="xslStyle12" colspan='0' style="border:solid 0px white;filter:progid:DXImageTransform.Microsoft.Gradient(endColorstr='#FFFFFF', startColorstr='#3F5875', gradientType='0');">  <xsl:value-of  select="//DOCUMENT_LIST/DOCTITLE/TITLE"/></td>      		
		  <style type="text/css">
		  </style>	 
	 </tr>
</table>

   <table class="xslStyleTable xslStyle8">
	  	<tr>
 		<td style="border:solid 0px white;">
    <b>
      <xsl:for-each select="//DOCUMENT_LIST/DOCTITLE/DESCRIPTION/br">
			 <xsl:value-of select="."></xsl:value-of><br/>
		</xsl:for-each>
      </b> </td>
		</tr>
  </table>

   <table  cellspacing="0" cellpadding="2" width="98%" class="xslStyleTable xslStyle8"  >

     <xsl:for-each select="//COLUMNS/COLUMN">
       <xsl:if test = "@class='ToolTip'">
         <xsl:apply-templates select="//ROWS/ROW">
           <xsl:with-param name="tooltip_pos" select="position()"/>
         </xsl:apply-templates>
       </xsl:if>
     </xsl:for-each>

   </table>
  </body>
</html>

</xsl:template>


<xsl:template match="//ROWS/ROW">
<xsl:param name="tooltip_pos"/>
<tr>
  <xsl:for-each select="child::*">
    <xsl:variable name="cell_pos" select="position()"/>
    <xsl:if test="//COLUMNS/COLUMN[$cell_pos]/@class='urlLinkDescription'">
      <xsl:variable name="column_id" select="//COLUMNS/COLUMN[$cell_pos]/@urlColumnIdLink"/>
      <td ><a href="{../CELL[position()=$column_id]}" title="{../CELL[$tooltip_pos]}" target="_blank"><xsl:value-of  select="."/></a></td>
		</xsl:if> 
	
		<xsl:if test="//COLUMNS/COLUMN[$cell_pos]/@class='urlLink'">	
		
		</xsl:if>
		<xsl:if test="//COLUMNS/COLUMN[$cell_pos]/@class='ToolTip'">	
		
		</xsl:if>
			
		<xsl:choose>
		  <xsl:when test="//COLUMNS/COLUMN[$cell_pos]/@class or //COLUMNS/COLUMN[$cell_pos]/HIDE">			
		  </xsl:when>
		  <xsl:otherwise>		  
			 <td title="{../CELL[$tooltip_pos]}"><xsl:value-of select="text()"/></td>
		  </xsl:otherwise>
		</xsl:choose> 
		    

   </xsl:for-each>
</tr>
</xsl:template>

</xsl:stylesheet>

