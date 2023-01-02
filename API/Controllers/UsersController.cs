using System.Security.Claims;
using API.DTOs;
using API.Extensions;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[Authorize]
public class UsersController : BaseApiController
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    private readonly IPhotoService _photoService;

    public UsersController(IUserRepository userRepository, IMapper mapper, IPhotoService photoService)
    {
        _photoService = photoService;
        _userRepository = userRepository;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
        return Ok(await _userRepository.GetMembersAsync());
        // return Ok(_mapper.Map<IEnumerable<MemberDto>>(users));
        // return await _context.Users.ToListAsync();
    }

    [HttpGet("{username}")]
    public async Task<ActionResult<MemberDto>> GetUser(string username)
    {
        return await _userRepository.GetMemberAsync(username);
        // return _mapper.Map<MemberDto>(user);
        // return await _context.Users.FindAsync(id);
    }

    [HttpPut]
    public async Task<ActionResult> UpdateUser(MemberUpdateDto memberUpdateDto)
    {
        var user = await _userRepository.GetUserByUsernameAsync(User.GetUsername());

        if (user == null)
            return NotFound();

        _mapper.Map(memberUpdateDto, user);

        if (await _userRepository.SaveAllAsync())
            return NoContent();

        return BadRequest("Failed to update user");
    }

    // [HttpPost("add-photo")]
    // public async Task<ActionResult<PhotoDto>> AddPhoto(IFormFile file)
    // {
    //     var user = await _userRepository.GetUserByUsernameAsync(User.GetUsername());
    // }
}
