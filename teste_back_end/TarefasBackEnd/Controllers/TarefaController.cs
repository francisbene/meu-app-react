using Microsoft.AspNetCore.Mvc;

namespace Tarefas.BackEnd.Controllers
{
  [ApiController]
  [Router ("Tarefa")]
  
  public class TarefaController : ControllerBase

  {
      public IActionResult Get() 
      {
          return Ok();
      }
  }  
}