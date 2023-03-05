using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mansor.Data.Migrations
{
    public partial class NotesTitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TaskGroupId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Notes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TaskGroupId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Notes");
        }
    }
}
