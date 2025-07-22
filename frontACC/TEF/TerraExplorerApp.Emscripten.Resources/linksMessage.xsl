<?xml version='1.0'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">	
<xsl:template match="/">					  
<html>

<META http-equiv="Content-Type" content="text/html; charset=UTF-16"/>
<script language="jscript">
<![CDATA[
var allLinksTable; 
function Sort(column_index)
{			
	var linksTable = document.all('linksTable');	
	for (i=1; i < linksTable.rows.length; i++)
	{
		var row =linksTable.rows(i);		
		for (j=i+1; j < linksTable.rows.length; j++)
		{        
			var row1 = linksTable.rows(j);									
			var str1 = row.cells(column_index-1).innerText;
			str1 = str1.toLowerCase();
			var str2 = row1.cells(column_index-1).innerText;
			str2 = str2.toLowerCase();
			if( str1> str2)
			{				
				linksTable.moveRow(j,i);
				row =linksTable.rows(i);									
			}
		}		
	}			
}

function document_onload() 
{
	var linksTable = document.all('linksTable');	
	allLinksTable = linksTable.cloneNode(true);
	if(CatCombo.options.length>0)
		return;
			
	var Category = document.createElement("OPTION");
	Category.text="All Categories";	
	Category.value=1;	
	CatCombo.add(Category);
	for (i=1; i < linksTable.rows.length; i++)
	{
		var row =linksTable.rows(i);						
		var catName = row.cells(1).innerText;
		
		var bFound=false;
		var arr = CatCombo.options;
		for(j=0;j<arr.length;j++)
		{
			if(row.cells(1).innerText == arr[j].innerText)
			{
				bFound = true;
				break;
			}
		}			
		if(bFound==false)
		{
			var Category = document.createElement("OPTION");
			Category.text=catName;	
			Category.value=i+1;	
			CatCombo.add(Category);

		}
	}	
	CatCombo.selectedIndex=0;	
	CatCombo.focus();
}

function CatCombo_onchange()
{
	var linksTable; 
	if(CatCombo.selectedIndex==0)
		linksTable = allLinksTable;
	else
	{
		linksTable = allLinksTable.cloneNode(true);							
		for(j=1;j<linksTable.rows.length;j++)
		{
			var row = linksTable.rows(j);
			if(row.cells(1).innerText!=CatCombo.options[CatCombo.selectedIndex].text )
			{
				row.removeNode();
				j--;
			}
		}
							
	}
	var oldlinksTable = document.all('linksTable');			
	oldlinksTable.replaceNode(linksTable);
	Sort(1);				
}

]]>
</script>
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
  
<body  bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" class="xslStyle8" onload="document_onload();">

<table border="0" cellspacing="0" cellpadding="2" width="100%" class="xslStyleTable xslStyle8">
  <tr >
    <xsl:if test= "string-length(//DOCUMENT_LIST/DOCTITLE/IMAGE/text())>7">
      <td align="left" style="border:solid 0px white;filter:progid:DXImageTransform.Microsoft.Gradient(endColorstr='#FFFFFF', startColorstr='#3F5875', gradientType='0');">
        <img src="{//DOCUMENT_LIST/DOCTITLE/IMAGE/text()}"/>
      </td>
    </xsl:if>
    <td align='center' colspan='0' class="xslStyle12" style="border:solid 0px white;filter:progid:DXImageTransform.Microsoft.Gradient(endColorstr='#FFFFFF', startColorstr='#3F5875', gradientType='0');">  <xsl:value-of  select="//DOCUMENT_LIST/DOCTITLE/TITLE"/></td>      		
		
	 </tr>
  <tr>
    <td colspan="2" style="border:solid 0px white;">
      <b>
      	<xsl:for-each select="//DOCUMENT_LIST/DOCTITLE/DESCRIPTION/br">
			 <xsl:value-of select="."></xsl:value-of><br/>
		</xsl:for-each>
      </b>
    </td>
  </tr>
  <tr>
    <td colspan="2" style="border:solid 0px white;" class="xslStyleTable xslStyle9">
      <span style="margin-left:5px"></span> Show:
      <SELECT language="javascript"  id="CatCombo" style="LEFT: 12px; WIDTH: 117px; TOP: 16px" 
          onchange="return CatCombo_onchange()" name="CatCombo">
      </SELECT>

    </td>
  </tr>
</table>

	<br />
   	<table id="linksTable" cellspacing="0" cellpadding="1" align="center" class="xslStyleTable xslStyle8" width="98%">	
		<tr class="rowHeader" style="cursor:pointer;background-color:#3F5875">								
			<xsl:call-template name="ShowColumnHeader">
				<xsl:with-param name="showIndex" select="1"/>
				<xsl:with-param name="index" select="1"/>
			</xsl:call-template>

		</tr>
	
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


<xsl:template name="ShowColumnHeader">
	<xsl:param name="showIndex"/>
	<xsl:param name="index"/>	
	<xsl:if test="//COLUMNS/COLUMN[$index]">					
		<xsl:choose>
			<xsl:when test="//COLUMNS/COLUMN[$index]/HIDE=1">			
				<xsl:call-template name="ShowColumnHeader">
					<xsl:with-param name="showIndex" select="$showIndex"/>
					<xsl:with-param name="index" select="$index+1"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
					<td align='center' class='xslStyle8w' >								
						<xsl:attribute name="onclick">
							<xsl:text>Sort(</xsl:text><xsl:value-of select="$showIndex"/><xsl:text>)</xsl:text>
						</xsl:attribute> 				
						<xsl:value-of select="//COLUMNS/COLUMN[$index]/NAME"/>
						<xsl:call-template name="ShowColumnHeader">
							<xsl:with-param name="showIndex" select="$showIndex+1"/>
							<xsl:with-param name="index" select="$index+1"/>
						</xsl:call-template>
					</td>						
			</xsl:otherwise>
		</xsl:choose>
	</xsl:if>
	
</xsl:template>



<xsl:template match="//ROWS/ROW">
  <xsl:param name="tooltip_pos"/>
  <xsl:variable name="rowNum" select="position()"/>
  <tr>
   <xsl:for-each select="child::*">
      <xsl:variable name="cell_pos" select="position()"/> 
		<xsl:choose>	           
			<xsl:when test="//COLUMNS/COLUMN[$cell_pos]/@class='urlLinkDescription'">
				<xsl:variable name="column_id" select="//COLUMNS/COLUMN[$cell_pos]/@urlColumnIdLink"/>				     		                            
				<td><a id="{$rowNum}"  href="{../CELL[position()=$column_id]/text()}" title="{../CELL[$tooltip_pos]}" target="_blank"><xsl:value-of  select="."/></a></td>
        <script>
          var href = "<xsl:value-of  select="translate(../CELL[position()=$column_id]/text(),'\','/')"/>";
          if(href.indexOf("file://") == 0)
          {
            document.getElementById("<xsl:value-of  select="$rowNum"/>").href = href;
          }
        </script>
			</xsl:when>			
			<xsl:otherwise>		  			
				<xsl:choose>
				  <xsl:when test="//COLUMNS/COLUMN[$cell_pos]/HIDE=1">			
				  </xsl:when>
				  <xsl:otherwise>		  
					 <td title="{../CELL[$tooltip_pos]}"><xsl:value-of select="text()"/></td>
				  </xsl:otherwise>
				</xsl:choose> 
			</xsl:otherwise>
		</xsl:choose> 		    
   </xsl:for-each>
</tr>
</xsl:template>

</xsl:stylesheet>



