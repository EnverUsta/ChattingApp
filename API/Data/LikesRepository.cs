using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class LikesRepository : ILikesRepository
{
    private readonly DataContext _context;

    public LikesRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<UserLike> GetUserLike(int sourceUserId, int targetUserId)
    {
        return await _context.Likes.FindAsync(sourceUserId, targetUserId);
    }

    public async Task<AppUser> GetUserWithLikes(int userId)
    {
        return await _context.Users.Include(x => x.LikedUsers).FirstOrDefaultAsync(x => x.Id == userId);
    }

    public async Task<IEnumerable<LikeDto>> GetUserLikes(string predicate, int userId)
    {
        var users = _context.Users.AsQueryable();
        var likes = _context.Likes.AsQueryable();

        if (predicate == "liked")
        {
            likes = likes.Where(like => like.SourceUserId == userId);
            users = likes.Select(like => like.TargetUser);
        }

        if (predicate == "likedBy")
        {
            likes = likes.Where(like => like.TargetUserId == userId);
            users = likes.Select(like => like.SourceUser);
        }

        users = users.OrderBy(user => user.UserName);

        return await users.Select(user => new LikeDto
        {
            UserName = user.UserName,
            Age = user.DateOfBirth.CalculateAge(),
            City = user.City,
            Id = user.Id,
            KnownAs = user.KnownAs,
            PhotoUrl = user.Photos.FirstOrDefault(x => x.IsMain).Url
        }).ToListAsync();
    }
}